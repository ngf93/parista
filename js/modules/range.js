window.initRange = (id) => {
    const range_block = document.getElementById(id),
          [from_input, to_input, range_min, range_max] = range_block.querySelectorAll('input'),
          progress = range_block.querySelector('.Category__inputProgress');

    const min_price = parseFloat(range_block.getAttribute('data-min-price')),
          max_price = parseFloat(range_block.getAttribute('data-max-price')),
          from = parseFloat(range_block.getAttribute('data-from')),
          to = parseFloat(range_block.getAttribute('data-to'));

    from_input.value = parseInt(from);
    to_input.value = parseInt(to);

    const difference = max_price - min_price,
          from_percent = from / difference,
          to_percent = (to - min_price) / difference;

    range_min.value = from_percent;
    range_max.value = to_percent;

    const road_width = range_block.offsetWidth,
          progressWidth = Math.abs(((to - from) / difference) * road_width) - 2 + 'px';
          marginLeft = ((from - min_price) / difference) * road_width;

    progress.style.width = progressWidth;
    progress.style.marginLeft = (marginLeft < 2 ? 2 : marginLeft) + 'px';
}

window.initializeRangeEvents = (id) => {
    const range_block = document.getElementById(id),
          [from_input, to_input, range_min, range_max] = range_block.querySelectorAll('input');

    from_input.addEventListener('input', e => {
        const min_price = parseFloat(range_block.getAttribute('data-min-price')),
              max_price = parseFloat(range_block.getAttribute('data-max-price'));

        let value = e.target.value;
        if(value < min_price) value = min_price;
        if(value > max_price) value = max_price;

        range_block.setAttribute('data-from', value);
        window.initRange(id);
    });

    to_input.addEventListener('input', e => {
        const min_price = parseFloat(range_block.getAttribute('data-min-price')),
              max_price = parseFloat(range_block.getAttribute('data-max-price'));

        let value = e.target.value;
        if(value < min_price) value = min_price;
        if(value > max_price) value = max_price;

        range_block.setAttribute('data-to', e.target.value);
        window.initRange(id);
    });

    range_min.addEventListener('input', e => {
        const min_price = parseFloat(range_block.getAttribute('data-min-price')),
              max_price = parseFloat(range_block.getAttribute('data-max-price')),
              to_price = parseFloat(range_block.getAttribute('data-to')),
              difference = max_price - min_price;

        let value = (difference * e.target.value) + min_price;
        if(value > (to_price - (difference * 0.1))) value = (to_price - (difference * 0.1))

        range_block.setAttribute('data-from', value);
        window.initRange(id);
    });

    range_max.addEventListener('input', e => {
        const min_price = parseFloat(range_block.getAttribute('data-min-price')),
              max_price = parseFloat(range_block.getAttribute('data-max-price')),
              from_price = parseFloat(range_block.getAttribute('data-from')),
              difference = max_price - min_price;

        let value = (difference * e.target.value) + min_price;
        if(value < (from_price + (difference * 0.1))) value = (from_price + (difference * 0.1));

        range_block.setAttribute('data-to', value);
        window.initRange(id);
    });
}

document.addEventListener('DOMContentLoaded', e => {
    const isRangePage = document.getElementById('category-price-range');

    if(isRangePage) {
        window.initializeRangeEvents('category-price-range');
        window.initRange('category-price-range'); 

        window.initializeRangeEvents('roomArea');
        window.initRange('roomArea');
    }
});