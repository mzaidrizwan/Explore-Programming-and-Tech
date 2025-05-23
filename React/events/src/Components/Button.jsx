
export default function Button() {
let message = "action performed = ";
   function sendAlert(a,b){
    alert(a+b.type);
   }

  return (
    <div className="btn_container">
      <button className="btn_class" onClick={(e)=>{sendAlert(message,e)}}>event focus</button>
    </div>
  )
}
