
    window.onload = ()=>{
        window.onscroll = ()=>{
        navigationScroll()
        sidebarScroll()
        }
    
    }

    const navigationScroll = ()=>{
        const navbar = document.querySelector(".header-main-container");
        const scrollHeight = window.scrollY;
        if(scrollHeight > 100){
          navbar.classList.add('scrolling');
          console.log(navbar)
        }else{
          navbar.classList.remove("scrolling");
        }
    }

    const sidebarScroll = ()=>{
        const sidebar = document.querySelector(".sidenav-main-container");
        const scrollHeight = window.scrollY;
        if(scrollHeight < 100){
            sidebar.classList.add('scrolling');
        }else{
            sidebar.classList.remove("scrolling");
        }
    }