window.onload = () => {
    const root = document.getElementById('root');
    const h2 = document.createElement('h2');
    h2.textContent = 'MANIPULANDO EL DOM';
    root.appendChild(h2);
  
    const link = document.querySelector('a');
    link.href = 'https://keybr.com';
  
    const buyList = [
      "books",
      "bread",
      "eraser",
      "earphones",
      "collection-cards",
      "hdmi",
      "vga",
      "motherboard",
      "university-books"
    ];
  
    const ul = document.createElement('ul');
    buyList.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
    root.appendChild(ul);
  };
  
  