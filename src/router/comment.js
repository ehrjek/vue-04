import axios from 'axios'
export default {
  getmessage (url) {
    // this.currentpage = i || this.currentpage
    axios({
      method: 'post',
      url: 'user/myMessage',
      headers: {
        'Accept': 'application/json'
      },
      CrossDomain: true,
      dataType: 'jsonp',
      params: {
        name1: ''
      }
    }).then(resp => {
      this.firstList = resp.data
      // for (var i = 0; i < this.firstList.length; i++) {
      this.totale = this.firstList.length
      this.pagetotal = parseInt(this.totale / 5) + 1
      console.log(this.totale)
      console.log(this.pagetotal)
      //   var item = this.firstList[i]
      //   console.log(item)
      //   console.log(item.msg_state)
      // }
    })
      .catch(failResponse => {
      })
  }
}
