import { createBrowserRouter } from "react-router-dom"
import Root from "../Root/Root"
import Home from "../Home/Home"
// import Errorpage from '../Errorpage/Errorpage'
import Blog from '../Bolg/Blog'
import Errorpage from '../Errorpage/Errorpage'
import Statics from '../Statics/Statics'
import Topics from '../Topics/Topics'
import SingleTopic from "../Topics/SingleTopic"
import Test from "../Test/Test"


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Errorpage></Errorpage>,

        children: [
            {
                path: '/',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Home></Home>,

            },
            {
                path: '/home',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Home></Home>

            },
            {
                path: 'topics',
                loader: async () => {
                    return fetch(`https://openapi.programming-hero.com/api/quiz`)
                },
                element: <Topics></Topics>,

            },
            {
                path: 'topic/:topicId',
                loader: async ({ params }) => {
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
                },
                element: <SingleTopic></SingleTopic>,

            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/test',
                element: <Test/>
            },

            {
                path: '/statics',
                loader: async()=>fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Statics></Statics>
            }


        ]
    },




])

export default router