<template>
  <div class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 ...">
    <div class="container mc-auto flex items-center justify-between">
      <h1 class="tracking-tighter text-4xl font-extrabold text-opacity-40">
        myGrade <span class="text-5xl">+</span>
      </h1>
      <nav>
        <ul class="flex space-x-4 w-full">
          <li
            class="
              py-8
              px-4
              hover:cursor-pointer hover:bg-yellow-100 hover:text-yellow-400
            "
          >
            <router-link to="/">Home</router-link>
          </li>
          <li
            class="
              py-8
              px-4
              hover:cursor-pointer hover:bg-yellow-100 hover:text-yellow-400
            "
          >
            <router-link to="/Profile">Profile</router-link>
          </li>
          <li
            class="
              py-8
              px-4
              hover:cursor-pointer hover:bg-yellow-100 hover:text-yellow-400
            "
          >
            <router-link to="/class">Class Information</router-link>
          </li>
          <li
            class="
              py-8
              px-4
              hover:cursor-pointer hover:bg-yellow-100 hover:text-yellow-400
            "
          >
            <router-link to="/messageBoard">Message Board</router-link>
          </li>
          <li
            class="
              py-8
              px-4
              hover:cursor-pointer hover:bg-yellow-100 hover:text-yellow-400
            "
          >
            <router-link to="/Login">Log in</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
