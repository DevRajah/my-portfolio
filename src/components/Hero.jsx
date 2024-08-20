import Button from "../components/reusable/Button"
const Hero = ({addNum}) => {
    return(

        <div> <h1>This is the Hero page {addNum}</h1>
        <Button buttonName = "Read more"/>
        </div>
    )
}

export default Hero