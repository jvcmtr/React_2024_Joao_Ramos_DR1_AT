
import { sections } from "./constants.js";

const navigate = (to) => {
  const element = document.getElementById(to);
  if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
  }
  else{
      window.location.href = to
  }
}


class Singleton {

  // CONSTRUTOR CRIADO COM AUXILIO DE INTELIGENCIA ARTIFICIAL
  constructor() {
    if (!Singleton.instance) {
      this._currentTab = sections[0];
      this.subscribers = []

      window.addEventListener('scroll', ()=>{
        sections.forEach((section) => { 
          const rect = document.getElementById(section).getBoundingClientRect();
          if (rect.top < window.innerHeight - 100 && rect.bottom> 100 ) {
            console.log("changed to section "+ section)
            this.currentTab = section
          }
        })
      });

      Singleton.instance = this;
    }
    return Singleton.instance;
  }

  get currentTab() {
    return this._currentTab
  }

  set currentTab(value){
    console.log("changing : "+ value)
    if (!sections.includes(value))
      {return}
  
    this._currentTab = value;
    this.notify()
  }

  changeTab(value) {
    console.log(value)

    if (!sections.includes(value))
    {return}

    this.currentTab = value;
    this.notify()
    navigate(value)
  }


  subscribe(callback) {
    this.subscribers.push(callback);
  }
  unsubscribe(callback) {
    this.subscribers = this.subscribers.filter(cb => cb !== callback);
  }

  notify() {
    this.subscribers.forEach(callback => callback(this.currentTab));
  }
}
  
  const instance = new Singleton();
  //Object.freeze(instance); // Prevent modifications to the instance // Auxilio de IA
  export default instance;
  