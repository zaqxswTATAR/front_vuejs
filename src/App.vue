<template>
  <div>
    <!-- Top Bar -->
    <nav class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row">
      <div class="container">
        <router-link to="/" class="navbar-brand float-left">Mathematical Relation</router-link>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link to="/" class="nav-link pe-3">Create Sequence</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/view" class="nav-link pe-3">View Sequence</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cv" class="nav-link">My Resume</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Router view -->
    <div class="container mt-5 mb-5">
      <router-view></router-view>
    </div>

    <!-- Footer -->
    <footer class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row text-white fixed-bottom">
      <div class="container">
        <div class="text-center">
          Related Link:
          <a class="text-white ps-2 pe-2" href="https://github.com/zaqxswTATAR/Mathematical_Relation.git">This Github Project</a>
          <a class="text-white" href="https://github.com/6110613178">My Github Portfolio</a>
        </div>
        <div class="text-center">
          Created In February 2023
        </div>
      </div>
    </footer>
  </div>
</template>