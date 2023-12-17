import { fireEvent, render, screen } from "@testing-library/react"
import Counter from "../Components/Counter"
import {expect, jest, test} from '@jest/globals';

describe("Counter Testing working fine",()=>{
    it('count render',()=>{
        render(<Counter/>)
        const count=screen.getByTestId('count')
        expect(count).toBeInTheDocument();
    })

    it('counter workin count',()=>{
        render(<Counter/>)
        const counter=screen.getByTestId('count')
        expect(counter).toHaveTextContent('Count : 0')
    })

    it('counter function check',()=>{
        const mockFunc=jest.fn()
        render(<Counter/>)
        const button=screen.getAllByTestId('add')
       fireEvent.click(button);
       expect(mockFunc).toBeCalled();
    })
})