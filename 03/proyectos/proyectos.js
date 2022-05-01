window.onload=()=>
{

    document.querySelectorAll(".carousel").forEach(carousel=> 
    {
        let item = carousel.querySelectorAll(".carousel__item");

        var buttonsHtml = '';
        item.forEach((val, i)=>
        {
            buttonsHtml += '<span class="carousel__button" index='+i+'></span>';
        });

        document.querySelector('.carousel__nav').innerHTML = buttonsHtml;
    });

    document.addEventListener('click', (e)=>
    {
        if(e.target.getAttribute('class') == 'carousel__button')
        {
            let buttons = document.querySelectorAll(".carousel__button");
            let items = document.querySelectorAll(".carousel__item");
            let selectedIndex = e.target.getAttribute('index');
            e.target.setAttribute('class', 'carousel__button carousel__button--selected');

            buttons.forEach((button, i)=>
            {
                if(i != selectedIndex)
                {
                    button.setAttribute('class', 'carousel__button');
                };
            });

            items.forEach((item, i)=>
            {
                if(i != selectedIndex)
                {
                    item.setAttribute('class', 'carousel__item');
                }
                else
                {
                    item.setAttribute('class', 'carousel__item carousel__item--selected');   
                };
            });
        };
    });
}