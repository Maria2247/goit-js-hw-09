import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                     */const a={email:"",message:""},s=document.querySelector(".feedback-form"),o="feedback-form-state";s.addEventListener("input",e=>{a.email=e.currentTarget.email.value,a.message=e.currentTarget.message.value,localStorage.setItem(o,JSON.stringify(a))});function m(){const e=localStorage.getItem(o);if(e){const t=JSON.parse(e),r=t.email,l=t.message;s.elements.email.value=r,s.elements.message.value=l}}m();function n(e){e.preventDefault();const t=e.currentTarget.email.value,r=e.currentTarget.message.value;if(t===""||r===""){alert("Fill please all fields");return}a.email=t,a.message=r,console.log(a),localStorage.removeItem(o),e.currentTarget.reset()}s.addEventListener("submit",n);
//# sourceMappingURL=commonHelpers2.js.map
