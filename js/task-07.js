{/* <input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>

<script>
  // Получаем ссылки на элементы ползунка и текста
  const fontSizeControl = document.getElementById('font-size-control');
  const text = document.getElementById('text');
  
  // Добавляем обработчик события 'input' на ползунок
  fontSizeControl.addEventListener('input', function() {
    // Изменяем размер текста, устанавливая значение font-size в пикселях
    text.style.fontSize = fontSizeControl.value + 'px';
  });
</script> */}

const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

fontSizeControl.addEventListener('input', handlerZoom)
function handlerZoom() {
    text.style.fontSize = fontSizeControl.value + 'px';
};

