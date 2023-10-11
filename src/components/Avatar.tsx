import { AppBar, Box, Container, IconButton, Toolbar} from "@mui/material";
import  seeLogo from "../img/see-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCog } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router";
import { height } from "@fortawesome/free-solid-svg-icons/fa0";
import { useEffect, useRef } from "react";

function Avatar(props: {width:number, height:number, avatarSeed: string, avatarColor: string}) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    
    useEffect(() => {
        const ctx = canvasRef.current?.getContext('2d');

        const widthUnit = props.width/6;
        const heightUnit = props.height/6;

        if(ctx){
            ctx.clearRect(0,0, props.width, props.height);
            ctx.fillStyle = props.avatarColor;
            ctx.globalCompositeOperation = "lighter";

            for (let i = 0; i < props.avatarSeed.length; i++) {
                const char = props.avatarSeed.charAt(i);
                if( char == '0'){
                    continue;
                } 
                if(i % 3 == 0){
                    ctx?.fillRect(0, heightUnit*Math.floor(i/3), widthUnit, heightUnit);
                    ctx?.fillRect(widthUnit*5, heightUnit*Math.floor(i/3), widthUnit, heightUnit);
                } else if( (i-1) % 3 == 0){
                    ctx?.fillRect(widthUnit, heightUnit*Math.floor(i/3), widthUnit, heightUnit);
                    ctx?.fillRect(widthUnit*4, heightUnit*Math.floor(i/3), widthUnit, heightUnit);
                } else {
                    ctx?.fillRect(widthUnit*2, heightUnit*Math.floor(i/3), widthUnit, heightUnit);
                    ctx?.fillRect(widthUnit*3, heightUnit*Math.floor(i/3), widthUnit, heightUnit);
                }
            }
        }        
    })
    

    return (
        <canvas width={props.width} height={props.height} ref={canvasRef}>
        </canvas>
    )
  }

  export default Avatar;