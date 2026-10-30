#!/usr/bin/env python3
"""quickjs DOM-stub smoke test for PhageQuiz-Final.html (and split index.html+data)."""
import io, json, re, sys
import quickjs

STUB = r"""
var __els={};
function mkEl(id){
  var e={id:id||"",_html:"",_text:"",className:"",disabled:false,style:{},dataset:{},
    offsetWidth:10,clientWidth:1280,clientHeight:720};
  Object.defineProperty(e,"innerHTML",{get:function(){return e._html},set:function(v){e._html=String(v)}});
  Object.defineProperty(e,"textContent",{get:function(){return e._text},set:function(v){e._text=String(v)}});
  e.classList={add:function(){},remove:function(){},toggle:function(){},contains:function(){return false}};
  e.setAttribute=function(){}; e.getAttribute=function(){return null};
  e.appendChild=function(c){ e._html += (c && c._html) ? c._html : ""; return c; };
  e.remove=function(){};
  e.addEventListener=function(){}; e.removeEventListener=function(){};
  e.querySelector=function(sel){return mkEl(sel)};
  e.querySelectorAll=function(){return []};
  e.focus=function(){}; e.click=function(){};
  e.getContext=function(){return new Proxy({},{get:function(t,p){ if(p in t) return t[p]; return function(){return undefined};}})};
  return e;
}
var __listeners={};
var document={
  getElementById:function(id){ if(!__els[id])__els[id]=mkEl(id); return __els[id]; },
  querySelector:function(sel){ return null; },
  querySelectorAll:function(sel){ return []; },
  createElement:function(tag){ return mkEl("<"+tag+">"); },
  addEventListener:function(t,f){ (__listeners[t]=__listeners[t]||[]).push(f); },
  removeEventListener:function(){},
  documentElement:{requestFullscreen:function(){},style:{}},
  hidden:false, fullscreenElement:null, exitFullscreen:function(){},
  write:function(){}, close:function(){}, body:mkEl("body")
};
var window=globalThis;
window.document=document;
window.innerWidth=1600; window.innerHeight=900;
window.addEventListener=function(t,f){ (__listeners[t]=__listeners[t]||[]).push(f); };
window.removeEventListener=function(){};
window.alert=function(){}; window.confirm=function(){return true};
var __ls={};
window.localStorage={getItem:function(k){return k in __ls?__ls[k]:null},setItem:function(k,v){__ls[k]=String(v)},removeItem:function(k){delete __ls[k]}};
window.BroadcastChannel=function(){ this.postMessage=function(){}; this.close=function(){}; };
var __iv=[]; window.setInterval=function(f,ms){ __iv.push(f); return __iv.length; };
window.clearInterval=function(){};
var __to=[]; window.setTimeout=function(f,ms){ __to.push(f); return __to.length; };
window.clearTimeout=function(){};
window.requestAnimationFrame=function(f){ return 1; };
window.cancelAnimationFrame=function(){};
window.open=function(){ return {closed:false,focus:function(){},document:{write:function(){},close:function(){}}}; };
window.print=function(){};
window.matchMedia=function(){return {matches:false,addListener:function(){},addEventListener:function(){}}};
function __fireTimers(n){ for(var k=0;k<n;k++){ for(var i=0;i<__iv.length;i++){ try{__iv[i]()}catch(e){} } } }
function __fireTimeouts(){ var t=__to.slice(); __to=[]; for(var i=0;i<t.length;i++){ try{t[i]()}catch(e){} } }
function __fireKey(key){ var ls=__listeners["keydown"]||[]; for(var i=0;i<ls.length;i++){ ls[i]({key:key,preventDefault:function(){},metaKey:false,ctrlKey:false,altKey:false}); } }
"""

def scripts_of(html):
    return re.findall(r"<script(?![^>]*src=)[^>]*>(.*?)</script>", html, re.S)

def run(paths, tests):
    ctx = quickjs.Context()
    ctx.eval(STUB)
    for p in paths:
        txt = io.open(p, encoding="utf-8").read()
        if p.endswith(".js"):
            ctx.eval(txt)
        else:
            for i, s in enumerate(scripts_of(txt)):
                ctx.eval(s)
    out = []
    for name, fn in tests:
        try:
            r = ctx.eval("(()=>{%s})()" % fn)
            out.append((name, "OK", r))
        except Exception as e:
            out.append((name, "FAIL", str(e)[:200]))
    return out

def main():
    standalone = sys.argv[1] if len(sys.argv) > 1 else "PhageQuiz-Final.html"
    import os
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    tests = [
        ("QUIZ loaded", "return JSON.stringify({n:N, q:Q.slides.filter(s=>s.type==='q').length, r:Q.slides.filter(s=>s.type==='rapid').length, img:Q.slides.filter(s=>s.type==='q'&&s.img).length})"),
        ("title drawn", "return (Q.slides[0].type==='title')?'title':'bad'"),
        ("beginShow no crash", "beginShow(); return 'ok'"),
        ("go to Q1 (idx 5)", "go(5); var sl=slide(); var t=sl._t; return JSON.stringify({type:sl.type, round:sl.round, total:t&&t.total, phase:t&&t.phase, ans:sl.answer, locked:/opt locked/.test(document.getElementById('stage').innerHTML)})"),
        ("45s countdown to unlock", "__fireTimers(151); var t=slide()._t; return JSON.stringify({phase:t.phase, remain:Math.round(t.remain*10)/10})"),
        ("tick to zero -> done", "__fireTimers(310); var t=slide()._t; return JSON.stringify({done:t.done, remain:t.remain})"),
        ("reveal Q1", "reveal(); var sl=slide(); return JSON.stringify({rev:!!sl._rev, win:/opt win/.test(document.getElementById('stage').innerHTML), bar:/CORRECT/.test(document.getElementById('revtxt').innerHTML)})"),
        ("score team 0 +10", "score(0,10); return scores[0]"),
        ("rapid team clock continuous", "var i0=Q.slides.findIndex(function(s){return s.type==='rapid'}); go(i0); var c=ensureTimer(slide()); var t0=c.total; __fireTimers(100); reveal(); var revHas=document.getElementById('stage').innerHTML.includes(slide().atext); __fireTimers(50); go(i0+1); var c2=ensureTimer(slide()); var same=(c2===c); var mid=Math.round(c2.remain); __fireTimers(460); var done=c2.done; go(i0+2); var c3=ensureTimer(slide()); var iB=-1; for(var k=0;k<N;k++){if(Q.slides[k].type==='rapid'&&Q.slides[k].team!==Q.slides[i0].team){iB=k;break}} go(iB); var cB=ensureTimer(slide()); return JSON.stringify({t0:t0, revHas:revHas, sameClock:same, midAfter15s:mid, done:done, zero:c3.remain, otherTeamFresh:cB.remain})"),
        ("rapid clock reset", "resetRapidClocks(); var i0=Q.slides.findIndex(function(s){return s.type==='rapid'}); go(i0); var c=ensureTimer(slide()); return JSON.stringify({remain:c.remain, done:c.done, persisted:(localStorage.getItem('pqf_rapid')||'').length>2})"),
        ("img slide + reveal overlays", "var i=Q.slides.findIndex(s=>s.type==='q'&&s.img); go(i); reveal(); applyImgReveal(); return JSON.stringify({i:i, rev:!!slide()._rev, hasWrap:document.getElementById('stage').innerHTML.includes('imgwrap'), letters:Object.keys(slide().letters||{}).length})"),
        ("emoji last img q", "var ii=[]; Q.slides.forEach((s,i)=>{if(s.type==='q'&&s.img)ii.push(i)}); go(ii[ii.length-1]); return JSON.stringify({i:ii[ii.length-1], q:slide().qtext.slice(0,40), ans:slide().answer})"),
        ("pause/resume", "var i=Q.slides.findIndex((s,k)=>s.type==='q'&&!s.img&&k>60); go(i); togglePause(); var p1=slide()._t.paused; togglePause(); return JSON.stringify({p1:p1,p2:slide()._t.paused})"),
        ("unlock now", "unlockNow(); return slide()._t.phase"),
        ("peek toggle", "togglePeek(); var a=peekOn; togglePeek(); return JSON.stringify({on:a,off:peekOn})"),
        ("scoreboard", "showSB(); return document.getElementById('sbbody').innerHTML.length>50?'ok':'empty'"),
        ("jump list", "showJump(); return document.getElementById('jmpbody').innerHTML.length>500?'ok':'empty'"),
        ("state msg", "var m=stateMsg(); return JSON.stringify({kind:m.kind, phase:m.phase, teams:m.teams.length})"),
        ("console cmd roundtrip", "sendCmd('next'); var i1=cur; sendCmd('prev'); return JSON.stringify({fwd:i1,back:cur})"),
        ("key html", "var h=keyHTML(); return JSON.stringify({len:h.length, hasAns:h.includes('✔'), q63:(h.match(/<b>Q\\d+\\./g)||[]).length})"),
        ("console html", "openConsole(); return window.CONSOLE_HTML_FINAL.length>1000?'ok':'short'"),
        ("keys nav", "var c0=cur; __fireKey('ArrowRight'); var c1=cur; __fireKey('ArrowLeft'); return JSON.stringify({c0:c0,c1:c1,c2:cur})"),
        ("all slides draw", "var bad=[]; for(var i=0;i<N;i++){ try{ go(i); }catch(e){ bad.push(i+':'+e.message) } } return bad.length?('BAD '+bad.join('|')):'all '+N+' slides drew'"),
        ("teams editable", "go(1); var h=document.getElementById('stage').innerHTML; setTeamName(0,'Asha Legends'); setMember(0,1,'Dr. Priya'); addMember(0); var m4=members[0].length; delMember(0,3); var i=Q.slides.findIndex(function(s){return s.type==='rapid'&&s.team===Q.teamsOriginal[0]}); go(i); var okChip=document.getElementById('stage').innerHTML.includes('ASHA LEGENDS'); resetTeams(); return JSON.stringify({ce:h.includes('contenteditable'), name:Q.teams[0], mem:members[0][1], m4:m4, back:members[0].length, chip:okChip, reset:Q.teams[0]==='Lytic Legends', persisted:(localStorage.getItem('pqf_members')||'').length>10})"),
        ("options complete", "var s1=Q.slides.find(function(s){return s.type==='q'&&/lysogenic conversion/i.test(s.qtext)}); var laughs=Q.slides.filter(function(s){return s.type==='q'&&s.round===11}); var okL=laughs.every(function(s){return s.options.every(function(o){return o.length>15})}); var sup=Q.slides.some(function(s){return s.type==='q'&&/10⁸/.test(s.qtext)}); var hyph=Q.slides.some(function(s){return s.type==='q'&&/high-host-density/.test(s.options[0])}); return JSON.stringify({q11B:s1.options[1]==='A change in bacterial phenotype caused by prophage gene', laughs:laughs.length, okL:okL, sup:sup, hyph:hyph})"),
        ("guard fields", "return JSON.stringify({read:S.readSeconds, ans:S.answerSeconds, rapidTeam:S.rapidTeamSeconds, teams:Q.teams.length})"),
    ]
    for name, st, val in run([standalone], tests):
        print(f"[{st}] {name}: {val}")
        if st == "FAIL":
            sys.exit(1)
    print("SMOKE PASS")

if __name__ == "__main__":
    main()
