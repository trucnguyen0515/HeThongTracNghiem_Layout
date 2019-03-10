import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-button-responsive-menu',
  templateUrl: './button-responsive-menu.component.html',
  styleUrls: ['./button-responsive-menu.component.scss']
})
export class ButtonResponsiveMenuComponent implements OnInit {

  constructor() { }

  checkClick(){
    let checkClass = $(".hamburglar").hasClass("is-open");
    console.log(checkClass);
    if(!checkClass){
        this.disableScroll();
    } else {
        this.enableScroll();
    }
}

  ngOnInit() {
    this.ButtonMenu();
  }

   //////// Button Menu Animation
   ButtonMenu(){
    var trigger = $('#hamburger'),
    isClosed = false;

    trigger.click(function () {
        burgerTime();
        $(".overplayMeny").toggleClass("openMenu");
        $(".burger-icon").toggleClass("bgMenu");
    });

    function burgerTime() {
        if (isClosed == true) {
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }
  }

  /* 
    
        Disable Scroll 
    
  */
   
    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    private keys = {37: 1, 38: 1, 39: 1, 40: 1};

    preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;  
    }

    preventDefaultForScrollKeys(e) {
        if (this.keys[e.keyCode]) {
            this.preventDefault(e);
            return false;
        }
    }

    disableScroll() {
    if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', this.preventDefault, false);
    window.onwheel = this.preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
    window.ontouchmove  = this.preventDefault; // mobile
    document.onkeydown  = this.preventDefaultForScrollKeys;
    }

    enableScroll() {
        if (window.removeEventListener)
            window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
        window.onmousewheel = document.onmousewheel = null; 
        window.onwheel = null; 
        window.ontouchmove = null;  
        document.onkeydown = null;  
    }

}
