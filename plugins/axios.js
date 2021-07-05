
export default function ({ $axios }) {
  $axios.onRequest(config => {
    console.log(config.url)
  })
}
