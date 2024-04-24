import { render } from "@testing-library/react"
import { NavLink } from "./nav-link"
import { MemoryRouter } from "react-router-dom"

describe('NavLink', () => {
    it('should highlight the nav link when is the current page link', () => {
        const wrapper = render(
            <>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/'>Home</NavLink>
            </>, {
            wrapper: ({ children }) => {
                return (
                    <MemoryRouter initialEntries={['/about']}>
                        {children}
                    </MemoryRouter>
                )
            }
        }
        )

        expect(wrapper.getByText('About').dataset.current).toEqual('true')
        expect(wrapper.getByText('Home').dataset.current).toEqual('false')
    })
})