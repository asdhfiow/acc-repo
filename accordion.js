(() => {

    class Accordion {
        constructor(obj){

            console.log('obj' , obj.hookName);

            const $elm = document.querySelector(obj.hookName);
            const $trigger = $elm.getElementsByTagName(obj.tagName);
        
            const triggerLen = $trigger.length;
            let index = 0;
            while (index < triggerLen) {
                $trigger[index].addEventListener('click' , (e) => this.clickHandler(e));
                index++;
            }
        }
        
          //クリックしたら実行される処理
   clickHandler(e){
    e.preventDefault();

    const $target = e.currentTarget;
    const $content = $target.nextElementSibling;
    
    if($content.style.display === 'block'){
        $content.style.display = 'none';
    } else {
        $content.style.display = 'block';
    }
}
    }

    const fuckingAccordion = new Accordion({
        hookName: '#js-faq',
        tagName: 'p'
    });
    const goodAccordion = new Accordion({
        hookName: '#js-accordion-good',
        tagName: 'a'
    });
    const badAccordion = new Accordion({
        hookName: '#js-accordion-bad',
        tagName: 'dd'
    });
    const notBadAccorcion = new Accordion({
        hookName: '#js-not-bad-accordion',
        tagName: 'dt'
    });


})();
