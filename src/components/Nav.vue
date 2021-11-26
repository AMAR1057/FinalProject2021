<script setup>
import { useRouter } from "vue-router";
import useAuth from "../composable/useAuth";
const { isAuthenticated, logout } = useAuth();
const router = useRouter();
const loggingOut = () => {
  logout();
  router.push("/");
};
</script>

<template>
  <div class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 ...">
    <div class="container mc-auto flex items-center justify-between">
      <h1 class="tracking-tight text-4xl font-extrabold text-opacity-40">
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
              Class Information
            </li>
          </router-link>
          <router-link to="/about">
            <li
              class="
                py-8
                px-4
                hover:cursor-pointer hover:bg-yellow-100 hover:text-yellow-400
              "
            >
              About
            </li>
          </router-link>
          <router-link v-if="!isAuthenticated" :to="{ path: '/Login' }">
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
          <div v-else class="flex">
            <router-link :to="{ name: 'Profile' }">
              <li
                class="
                  px-4
                  py-8
                  hover:cursor-pointer hover:bg-pink-300 hover:text-pink-200
                "
              >
                Profile
              </li>
            </router-link>
            <button @click="loggingOut">
              <li
                class="
                  px-4
                  py-8
                  hover:cursor-pointer hover:bg-yellow-100 hover:text-yellow-400
                "
              >
                Logout
              </li>
            </button>
          </div>
        </ul>
      </nav>
    </div>
  </div>
</template>
