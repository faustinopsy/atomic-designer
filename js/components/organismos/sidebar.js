import h from '../atomos/htag.js';
function renderSidebar() {
    const sidebar = document.createElement('aside');
    sidebar.appendChild(h('h2','Sidebar'));
    
    return sidebar;
  }
  export default renderSidebar;
  