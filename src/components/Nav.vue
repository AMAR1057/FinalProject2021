<template>
  <div class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 ...">
    <div class="container mc-auto flex items-center justify-between">
      <h1 class="tracking-tighter text-4xl font-extrabold text-opacity-40">
        myGrade <span class="text-5xl">+</span>
      </h1>
      <nav>
        <ul class="flex space-x-4 w-full">
          <router-link to="/">
            <li
              class="
                py-8
                px-4
                hover:cursor-pointer hover:bg-yellow-100 hover:text-yellow-400
              "
            >
              Home
            </li>
          </router-link>
          <router-link :to="{ name: 'Profile' }">
            <li
              class="
                py-8
                px-4
                hover:cursor-pointer hover:bg-yellow-100 hover:text-yellow-400
              "
            >
              Profile
            </li>
          </router-link>
          <router-link :to="{ name: 'class' }">
            <li
              class="
                py-8
                px-4
                hover:cursor-pointer hover:bg-yellow-100 hover:text-yellow-400
              "
            >
              Class Information
            </li></router-link
          >
          <router-link to="/message">
            <li
              class="
                py-8
                px-4
                hover:cursor-pointer hover:bg-yellow-100 hover:text-yellow-400
              "
            >
              Message Board
            </li>
          </router-link>
          <router-link to="/Login">
            <li
              class="
                py-8
                px-4
                hover:cursor-pointer hover:bg-yellow-100 hover:text-yellow-400
              "
            >
              Log in
            </li>
          </router-link>
        </ul>
      </nav>
    </div>
  </div>
</template>
