import styled from "styled-components";
import tw, { theme } from "twin.macro";


export const Container = styled.div`
  ${tw`fixed flex justify-center text-2xl text-center items-center w-14 h-14 rounded-full right-5 bottom-5 `} 
  background-color:${theme`textColor.secondary`}
`