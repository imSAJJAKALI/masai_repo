import { render, screen } from "@testing-library/react"
import Button from "../Components/Button"
import {expect, jest, test} from '@jest/globals';
import App from "../App";

describe("Testing Button Component",()=>{
    // it('button should render',()=>{
    //     render(<App/>)
     
    //     const button=screen.getByText('hello')
    //      expect (button).toBeInTheDocument();
    //      screen.debug()
    // });
    // it('button2 should render',()=>{
    //     render(<App/>)
     
    //     const button2=screen.getByTestId('test_btn')
    //      expect (button2).toBeInTheDocument();
    //      screen.debug()
    // });

    // it('checking if the parameter (children) is getting passer or not',()=>{
    //     render(<App/>);
    //     const button=screen.getByTestId('test_btn');
    //     expect(button).toHaveTextContent('zeo')
    //      screen.debug()
    // });

    it('test multiple button ',()=>{
        render(<App/>)
        const button =screen.getAllByTestId('test_btn')
       expect(button[0]).toHaveTextContent('zeo')
       expect(button[1]).toHaveTextContent('HELLO')
       expect(button[2]).toHaveTextContent('BY')
       expect(button[3]).toHaveTextContent('CLICK')

       screen.debug()

    })

});