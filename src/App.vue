<template>
  <div id="app">
    <!-- Responsive App Bar -->
    <header class="app-bar">
      <div v-if="isSmallOrMediumScreen" class="drawer-icon" @click="toggleDrawer">
          ☰   Logo
      </div>
      <div v-if="!isSmallOrMediumScreen" class="drawer-icon" @click="toggleDrawer">
          Logo
        </div>
      <div class="logo"></div>
      <!-- Drawer Icon (visible on small and medium screens) -->
      <nav class="horizontal-menu">
        
      
    <ul style="text-align: center;"  v-if="!isSmallOrMediumScreen">
    <li v-for="(menuItem, index) in menuItems" :key="index">
       <router-link to="/" v-if="menuItem == 'Home'">{{ menuItem }}</router-link>  
       <router-link to="/about" v-if="menuItem == 'About'">{{ menuItem }}</router-link> 
       <router-link to="/service" v-if="menuItem == 'Services'">{{ menuItem }}</router-link> 
       <router-link to="/contact" v-if="menuItem=='Contact'">{{ menuItem }}</router-link> 
       <router-link to="/other" v-if="menuItem == 'Other'">{{ menuItem }}</router-link>
    </li>
  </ul>
  </nav>
    </header>

    <!-- Drawer Content (visible on small and medium screens) -->
    <div v-if="isSmallOrMediumScreen"  class="drawer" :class="{ 'drawer-open': isDrawerOpen }" style="background-color: white ;z-index: 1;margin-top: 100px;">
      <!-- Drawer Content Goes Here -->
      <ul class="vertical-menu" style="margin-top: -50px; z-index: 5; padding-left: 40px; margin-right: -500px;">
        <li v-for="(menuItem, index) in menuItems" :key="index" @click="handleMenuItemClick(item)">
         <router-link to="/" v-if="menuItem === 'Home'"  >{{ menuItem }}</router-link>  
         <router-link to="/about" v-if="menuItem == 'About'"  >{{ menuItem }} </router-link> 
         <router-link to="/service" v-if="menuItem == 'Services'"  >{{ menuItem }}</router-link> 
         <router-link to="/contact" v-if="menuItem == 'Contact'"  >{{ menuItem }}</router-link> 
        </li>
      </ul>
    </div>
  <router-view />
    <!-- Main Content -->
    <main>
      <!-- Your Main Content Goes Here -->
      
    </main>
  </div>
  <h1>{{ message }}</h1>
      <button @click="incrementCounter">Increment Counter</button>
      <p>Counter: {{ counter }}</p>
</template>

<script>
export default {
  computed: {
    message() {
      return this.$store.state.message;
    },
    counter() {
      return this.$store.state.counter;
    },
  },
  data() {
    return {
      isDrawerOpen: false,
      isSmallOrMediumScreen: false,
      menuItems: ['Home', 'About', 'Services', 'Contact'],
    };
  },
  mounted() {
    // Check screen size on mount and whenever the window is resized
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  unmounted() {
    // Remove the resize event listener when the component is destroyed
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      // Update the isSmallOrMediumScreen property based on the window width
      this.isSmallOrMediumScreen = window.innerWidth < 768; // Adjust the breakpoint as needed
    },
    toggleDrawer() {
      // Toggle the state of the drawer when the icon is clicked
      this.isDrawerOpen = !this.isDrawerOpen;
    },
    handleMenuItemClick(item) {
      // Handle menu item click
      console.log(`Clicked on ${item}`);
      // Close the drawer
      this.isDrawerOpen = false;
    },
    incrementCounter() {
      this.$store.commit('incrementCounter');
    },
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.app-bar {
  background-color: #333;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5em;
}

.drawer-icon {
  font-size: 1.5em;
  cursor: pointer;
}

.drawer {
  background-color: #333;
  text-align: center;
  color: #fff;
  position: fixed;
  top: 0;
  left: -250px;
  /* Move the drawer off-screen initially */
 /* width: 250px; */
  height: 100%;
  padding: 15px;
  transition: left 0.3s ease;
}

.drawer-open {
  left: 0;
}

main {
  padding: 20px;
}

.horizontal-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

 

.horizontal-menu {
  background-color: #333;
}

.horizontal-menu ul {
  display: flex;
}

.horizontal-menu li {
  margin: 0;
  height: 45px;
  vertical-align: middle;

}

.horizontal-menu a {
  display: block;
  padding: 15px;
  color: white;
  text-decoration: none;
}

.horizontal-menu a:hover {
  background-color: #555;
}

 
.vertical-menu li a {
  color: white;
}

a :hover {
  color: #00ff00; /* This sets the color to green when the link is hovered over */
}
 

.vertical-menu li {
  padding: 10px;
  margin-left: -50px;
  width: 80px;
  background-color: #0d6efd;
  font-weight: 100;
  color: white;
}

 
</style>
