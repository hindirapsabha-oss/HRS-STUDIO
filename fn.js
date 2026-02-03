const btn = document.querySelector('.mobile-menu-btn');
        const nav = document.querySelector('.nav-links');

        btn.addEventListener('click', () => {
            if(nav.style.display === 'flex') {
                nav.style.display = 'none';
            } else {
                nav.style.display = 'flex';
                nav.style.flexDirection = 'column';
                nav.style.position = 'absolute';
                nav.style.top = '90px';
                nav.style.left = '0';
                nav.style.width = '100%';
                nav.style.background = '#050505';
                nav.style.padding = '20px';
                nav.style.textAlign = 'center';
                nav.style.borderBottom = '1px solid #222';
            }
        });
