async function getComponent() {
   // return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
   //    var element = document.createElement('div')

   //    element.innerHTML = _.join(['Hello', 'webpack'], ' ')

   //    return element;

   // }).catch(error => 'An error occurred while loading the component')
   var element = document.createElement('div')
   // const _ = await import(/* webpackChunkName: "lodash" */ 'lodash')

   // element.innerHTML = _.join(['Hello', 'webpack'], ' ')
   var button = document.createElement('button');
   var br = document.createElement('br');

   button.innerHTML = 'Click me and look at the console!';
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   element.appendChild(br);
   element.appendChild(button);

   // Note that because a network request is involved, some indication
   // of loading would need to be shown in a production-level site/app.
   button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
     var print = module.default;

     print();
   });
   return element
}
document.body.appendChild(component())
// getComponent().then(component => {
// })