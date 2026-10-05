const slides = [
  {
    kicker:"01 · CUSTOMER",
    title:"Who is Nubian Skin?",
    intro:"A growing beauty retailer using Cora to bring orders, inventory, payments and fulfilment into one workflow.",
    body:`<div class="slide-grid">
      <div class="fact-card"><div class="label">PLAN</div><div class="value">Growth</div><p>₦35,000 / month</p></div>
      <div class="fact-card"><div class="label">CONTRACT VALUE</div><div class="value">₦420K</div><p>Annual contract value</p></div>
      <div class="fact-card"><div class="label">CUSTOMER TENURE</div><div class="value">6 months</div><p>Month 6 of 12</p></div>
      <div class="fact-card"><div class="label">RENEWAL</div><div class="value">90 days</div><p>Contract end approaching</p></div>
    </div>
    <div class="slide-grid">
      <div class="fact-card"><div class="label">CUSTOMER GOALS</div><p>• Streamline orders from Instagram, WhatsApp and the online store<br>• Reduce manual operational work<br>• Improve inventory accuracy<br>• Improve customer experience</p></div>
      <div class="fact-card"><div class="label">STAKEHOLDERS</div><p><strong>Stacia Johnston</strong> — Product Manager / Champion<br><strong>Daniel Okafor</strong> — IT & Systems Lead / Technical<br><strong>Amaka Bello</strong> — Operations Lead</p></div>
    </div>`
  },
  {
    kicker:"02 · HEALTH DIAGNOSIS",
    title:"What is happening right now?",
    intro:"The Health Score is a warning signal. The underlying account data tells me where the risk is coming from.",
    body:`<table class="signal-table"><thead><tr><th>Signal</th><th>Earlier</th><th>Current</th><th>What I take from it</th></tr></thead><tbody>
      <tr><td>Weekly active users</td><td>7 / 8</td><td>4 / 8</td><td>Adoption has weakened</td></tr>
      <tr><td>Orders through Cora</td><td>90%</td><td>62%</td><td>Work is moving outside the platform</td></tr>
      <tr><td>Inventory discrepancies</td><td>2 / month</td><td>7 / month</td><td>Operational accuracy is at risk</td></tr>
      <tr><td>Support tickets</td><td>3 / month</td><td>8 / month</td><td>Friction is increasing</td></tr>
      <tr><td>NPS</td><td>8 / 10</td><td>5 / 10</td><td>Customer sentiment has weakened</td></tr>
      <tr><td>CSM engagement</td><td>Monthly</td><td>2 meetings missed</td><td>Relationship risk</td></tr>
    </tbody></table><p style="margin-top:25px"><span class="risk">HEALTH SCORE: 48 / 100 · AT RISK</span></p>`
  },
  {
    kicker:"03 · ROOT-CAUSE INVESTIGATION",
    title:"What do I need to understand before I act?",
    intro:"I would not assume that low adoption means a training problem. I would test the possible causes.",
    body:`<div class="steps">
      <div class="step"><div class="step-num">01</div><div><strong>TECHNICAL — Is inventory/order sync failing?</strong><p>Ask Daniel for error patterns, affected workflows and recent configuration changes.</p></div></div>
      <div class="step"><div class="step-num">02</div><div><strong>PROCESS — Has the customer's order process changed?</strong><p>Ask Amaka where work is still being done manually and why.</p></div></div>
      <div class="step"><div class="step-num">03</div><div><strong>ADOPTION — Do users understand the corrected workflow?</strong><p>Review user activity, workflow completion and previous enablement.</p></div></div>
      <div class="step"><div class="step-num">04</div><div><strong>BUSINESS — Has something changed on Nubian Skin's side?</strong><p>Ask about staffing, order volume, new channels or operational priorities.</p></div></div>
    </div><p style="margin-top:25px"><strong>Decision rule:</strong> I investigate first, then choose the intervention that matches the evidence.</p>`
  },
  {
    kicker:"04 · DIAGNOSIS",
    title:"What I believe is driving the risk",
    intro:"The evidence points to a technical workflow problem that has created an operational workaround and weakened adoption.",
    body:`<div class="steps">
      <div class="step"><div class="step-num">01</div><div><strong>Configuration issue</strong><p>Inventory updates fail after some orders.</p></div></div>
      <div class="step"><div class="step-num">02</div><div><strong>Operational workaround</strong><p>Operations return to spreadsheets to protect fulfilment.</p></div></div>
      <div class="step"><div class="step-num">03</div><div><strong>Adoption decline</strong><p>Users stop relying on Cora for the full workflow.</p></div></div>
      <div class="step"><div class="step-num">04</div><div><strong>Customer impact</strong><p>Support volume rises; sentiment and engagement weaken.</p></div></div>
    </div><p style="margin-top:25px"><strong>CSM implication:</strong> another generic training session would be premature. The workflow must be reliable first.</p>`
  },
  {
    kicker:"05 · 90-DAY RECOVERY PLAN",
    title:"What is my plan?",
    intro:"The plan has three phases. Each phase has a different purpose, owner and proof point.",
    body:`<div class="phase-grid">
      <div class="phase-card"><div class="label">DAYS 1–30</div><h4>Stabilise</h4><p>Escalate the inventory configuration issue, review affected tickets, run UAT and retrain affected users.</p><p><strong>Goal:</strong> reliable workflow + safe handover.</p></div>
      <div class="phase-card"><div class="label">DAYS 31–60</div><h4>Rebuild adoption</h4><p>Monitor active users and order share, target enablement, hold short check-ins and re-engage the champion.</p><p><strong>Goal:</strong> Cora becomes the default workflow again.</p></div>
      <div class="phase-card"><div class="label">DAYS 61–90</div><h4>Demonstrate value</h4><p>Compare results to customer goals, review time saved and accuracy, hold a value review and prepare renewal readiness.</p><p><strong>Goal:</strong> evidence of value before renewal.</p></div>
    </div>`
  },
  {
    kicker:"06 · STAKEHOLDER STRATEGY",
    title:"Who needs what from me?",
    intro:"The recovery depends on different people for different reasons. I would not use one message or cadence for everyone.",
    body:`<div class="stake-grid">
      <div class="stake-card"><div class="label">CHAMPION</div><h4>Stacia Johnston</h4><p><strong>Concern:</strong> value and whether Cora is delivering.</p><p><strong>Action:</strong> monthly value conversation; share progress and outcomes.</p><p><strong>Outcome:</strong> re-engaged champion who can validate business value.</p></div>
      <div class="stake-card"><div class="label">TECHNICAL</div><h4>Daniel Okafor</h4><p><strong>Concern:</strong> technical reliability and implementation effort.</p><p><strong>Action:</strong> focused technical escalation + UAT checkpoints.</p><p><strong>Outcome:</strong> configuration fixed and ownership clear.</p></div>
      <div class="stake-card"><div class="label">OPERATIONS</div><h4>Amaka Bello</h4><p><strong>Concern:</strong> day-to-day workflow and manual workload.</p><p><strong>Action:</strong> workflow walkthrough + targeted training + feedback.</p><p><strong>Outcome:</strong> team confidently uses Cora end-to-end.</p></div>
    </div>`
  },
  {
    kicker:"07 · ADOPTION STRATEGY",
    title:"How do I get the team using Cora again?",
    intro:"The objective is not more logins. It is consistent completion of the workflows that matter to Nubian Skin.",
    body:`<div class="slide-grid">
      <div class="fact-card"><div class="label">TARGETED ENABLEMENT</div><p>30–45 min workflow session<br>Live demonstration using their process<br>Guided practice / UAT<br>Short job aid / workflow guide<br>Follow-up office hour</p></div>
      <div class="fact-card"><div class="label">WEEKLY SIGNALS</div><p><strong>WAU:</strong> 4/8 → 7/8<br><strong>Order share:</strong> 62% → 90%+<br><strong>Inventory errors:</strong> 7 → ≤2 / month<br><strong>Support tickets:</strong> 8 → ≤3 / month<br><strong>Manual work:</strong> 2–3 hrs/day → &lt;1 hr/day</p></div>
    </div><p style="margin-top:25px;color:var(--muted)"><strong>Cadence:</strong> weekly in the first 30 days → weekly/biweekly in days 31–60 → monthly value review in days 61–90.</p>`
  },
  {
    kicker:"08 · VALUE",
    title:"How will I prove that Cora worked?",
    intro:"I would measure the original customer goals, not just product activity.",
    body:`<table class="signal-table"><thead><tr><th>Customer goal</th><th>Baseline</th><th>Day-90 target</th><th>Evidence</th></tr></thead><tbody>
      <tr><td>Streamlined order flow</td><td>62% orders in Cora</td><td>90%+</td><td>Order-channel report</td></tr>
      <tr><td>Less manual work</td><td>2–3 hrs/day</td><td>&lt;1 hr/day</td><td>Ops time estimate / workflow review</td></tr>
      <tr><td>Inventory accuracy</td><td>7 discrepancies/month</td><td>≤2/month</td><td>Inventory/support records</td></tr>
      <tr><td>Customer experience</td><td>NPS 5/10</td><td>8/10</td><td>NPS / customer feedback</td></tr>
      <tr><td>Adoption</td><td>4/8 WAU</td><td>7/8 WAU</td><td>Product usage</td></tr>
    </tbody></table><p style="margin-top:25px"><em>“Are you now operating the way you told us you wanted to operate when you bought Cora?”</em></p>`
  },
  {
    kicker:"09 · RENEWAL & GROWTH",
    title:"When is Nubian Skin ready for the commercial conversation?",
    intro:"Expansion should come after the account demonstrates stable value — not while the customer is still trying to recover.",
    body:`<div class="slide-grid">
      <div class="fact-card"><div class="label">RENEWAL READINESS</div><p>• Technical issue resolved<br>• Core workflow adopted<br>• Support friction reduced<br>• Champion / stakeholder engagement restored<br>• Customer goals showing measurable progress</p></div>
      <div class="fact-card"><div class="label">POTENTIAL EXPANSION TRIGGER</div><p>Nubian Skin begins adding stores or needs more staff / locations.</p><p>Growth in operational complexity can create a genuine need for additional Cora capability.</p></div>
    </div><p style="margin-top:30px"><strong>My commercial approach:</strong> Stabilise → Prove value → Understand future needs → Discuss expansion.</p>`
  },
  {
    kicker:"10 · CSM TAKEAWAY",
    title:"The recovery is not the plan. The recovery is the reasoning.",
    intro:"I observed the signals → investigated the cause → coordinated the fix → rebuilt adoption → measured value → prepared the account for renewal.",
    body:`<div class="phase-grid">
      <div class="phase-card"><div class="label">01</div><h4>Diagnose</h4><p>Use health signals as the starting point, not the conclusion.</p></div>
      <div class="phase-card"><div class="label">02</div><h4>Own the outcome</h4><p>Connect activity to the customer's actual business goals.</p></div>
      <div class="phase-card"><div class="label">03</div><h4>Coordinate</h4><p>Bring technical, operations and customer stakeholders together.</p></div>
    </div><div class="fact-card" style="margin-top:15px;background:var(--plum);color:var(--ivory)"><div class="label" style="color:var(--sage)">SIMULATED PORTFOLIO CASE</div><div class="value" style="color:var(--ivory)">Thank you.</div><p style="color:#d4c8ce">All customer data in this case study is simulated.</p></div>`
  }
];

const modal = document.getElementById("caseModal");
const caseCards = document.querySelectorAll("[data-case]");
const closeEls = document.querySelectorAll("[data-close]");
const prev = document.getElementById("prevSlide");
const next = document.getElementById("nextSlide");
const dots = document.getElementById("slideDots");
const total = document.getElementById("slideTotal");
let current = 0;

total.textContent = slides.length;
dots.innerHTML = slides.map((_,i)=>`<span class="dot ${i===0?"active":""}" data-dot="${i}"></span>`).join("");

function renderSlide(){
  const s=slides[current];
  document.getElementById("slideNumber").textContent=String(current+1).padStart(2,"0");
  document.getElementById("progressBar").style.width=`${((current+1)/slides.length)*100}%`;
  document.getElementById("slideKicker").textContent=s.kicker;
  document.getElementById("slideTitle").textContent=s.title;
  document.getElementById("slideIntro").textContent=s.intro;
  document.getElementById("slideBody").innerHTML=s.body;
  document.querySelectorAll(".dot").forEach((d,i)=>d.classList.toggle("active",i===current));
  prev.disabled=current===0; next.textContent=current===slides.length-1?"Close case study":"Next →";
}
function openCase(){
  current=0; renderSlide(); modal.classList.add("open"); modal.setAttribute("aria-hidden","false"); document.body.style.overflow="hidden";
}
function closeCase(){
  modal.classList.remove("open"); modal.setAttribute("aria-hidden","true"); document.body.style.overflow="";
}
caseCards.forEach(c=>c.addEventListener("click",openCase));
closeEls.forEach(c=>c.addEventListener("click",closeCase));
prev.addEventListener("click",()=>{if(current>0){current--;renderSlide()}});
next.addEventListener("click",()=>{if(current<slides.length-1){current++;renderSlide()}else closeCase()});
dots.addEventListener("click",e=>{if(e.target.dataset.dot){current=Number(e.target.dataset.dot);renderSlide()}});
document.addEventListener("keydown",e=>{
  if(!modal.classList.contains("open")) return;
  if(e.key==="Escape") closeCase();
  if(e.key==="ArrowRight" && current<slides.length-1){current++;renderSlide()}
  if(e.key==="ArrowLeft" && current>0){current--;renderSlide()}
});
