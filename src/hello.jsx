export default function Hello() {

    function handleBoy(){
        alert('Working handle boy')
    }
    const handleGirl=()=>{
        alert('Working handle Girl')
    }
   return (
   <>
    <h1>
        Taraque
    </h1>
    <button onClick={handleBoy}>Click Me</button>
    <button onClick={handleGirl}>Click Girl</button>
    <button onClick={()=>{alert('This is from Parents')}}>Click Parents</button>
   </>
   )
}