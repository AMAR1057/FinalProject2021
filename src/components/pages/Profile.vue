<template>
  <h1 class="text-6xl text-center text-red-500 font-extrabold">
    Student Profile
  </h1>
  <br />
  <br />
  <p><img src="../../assets/student.jpg " alt="student image" /></p>
  <br />
  <br />
  <br />
  <div class="border-2 divide-purple-400">
    <table>
      <tr>
        <th>Student Name: John Smith</th>
      </tr>
    </table>
  </div>

  <div class="border-2 divide-purple-400">
    <table>
      <tr>
        <th>Student ID: ST8596</th>
      </tr>
    </table>
  </div>

  <div class="border-2 divide-purple-400">
    <table>
      <tr>
        <th>Grade Level: 2nd Grade</th>
      </tr>
    </table>
  </div>
  <div class="border-2 divide-purple-400">
    <table>
      <tr>
        <th>Teacher: Miss Michaels</th>
      </tr>
    </table>
  </div>
  <br />
  <br />
  <br />
  <h2 class="text-4xl text-center text-red-500 font-extrabold">
    Message Board
  </h2>

  <div
    class="
      min-h-[500px]
      w-full
      mt-8
      rounded-lg
      shadow-2xl
      justify-between
      bg-red-200
    "
  >
    <img
      class="justify-center h-60"
      src="../../assets/chat.png "
      alt="chat image"
    />
    <ul class="text-center p-4 space-y-4">
      <li v-for="n in 5">
        <div class="flex justify-between bg-pink-200 px-4 py-2 rounded-lg">
          <span>Message</span><span>by Author Name</span>
        </div>
      </li>
    </ul>
    <div>
      <input
        class="w-full p-4 roundend-lg focus:outline-none focus:bg-yellow-200"
        type="text"
        placeholder="Type a message"
      />
    </div>
  </div>
</template>
