import { Store } from "vuex";

export default {
  title: 'My Custom Title',
  allRepo: [],
  created() {
    fetch('https://api.github.com/users/simondahlstrom/repos', {
      method: 'get'
    })
      .then(response => {
        return response.json()
      })
      .then((data) => {
        const ObjStr = JSON.stringify(data)
        this.allRepo.push(ObjStr)
      })
  }
}
