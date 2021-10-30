<template>
  <main>
    <h1>This is a test page</h1>
    <p>Check out the build log</p>
    <template v-for="(image, index) in images">
      <div :key="index" class="flex flex-col">
        <g-image :src="require(`!!assets-loader?width=1440&height=770!@images/${image}`)" width="770"/>
        <g-image :src="require(`!!assets-loader?width=1440&height=480!@images/${image}`)" width="480"/>
      </div>
    </template>
  </main>
</template>

<script>
export default {
  data () {
    return {
      images: [
        "image-11.jpg",
        "image-1.jpg",
        "image-2.jpg",
        "image-3.jpg",
        "image-4.jpg",
        "image-5.jpg",
        "image-6.jpg",
        "image-7.jpg",
        "image-8.jpg",
        "image-9.jpg",
        "image-10.jpg"
      ]
    }
  }
}
</script>

