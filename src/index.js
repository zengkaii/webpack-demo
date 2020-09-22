function getComponent() {
   console.log(123)
   console.log()
   return () => {
      console.log(1234)
   }
}
getComponent()()