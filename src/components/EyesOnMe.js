
function EyesOnMe (){
     function handleFocus(){
        console.log("Good!")
     }
     function handleBlur (){
        console.log('Hey! Eyes on me!')
     }
    return (
        <div> 
            <button onBlur={handleBlur} onFocus={handleFocus}>Eyes on me</button>
        </div>
        )
}
//note for the onblur we dont need to add an arow function to not unless we expect some data to be called with it ]
//cause we arent calling the function already when passing jsx but now its upon the event handers to handle them ...
export default EyesOnMe