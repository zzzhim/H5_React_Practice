/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-22 22:06:20
 * @LastEditTime: 2019-05-03 15:23:11
 */
import { createGlobalStyle } from 'styled-components'

export const GlobalIconFont= createGlobalStyle`
    @font-face {
        font-family: "iconfont";
        src: url('iconfont.eot?t=1556868044350'); /* IE9 */
        src: url('iconfont.eot?t=1556868044350#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAYcAAsAAAAAC4QAAAXQAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDZAqJRIdnATYCJAMgCxIABCAFhG0HZBvNCcgOJaDAwABgYFBE/z9u+vclwRLqQMVSl4k5MjEkocFPSOnmsDn87yFTs9oXV3jIv73r/oKWZpiFCbaSJAsDTDzwDIIk7OCY6ZoaLA9oLlllkTQeJdCA8rusgh40yF5Q30Zs/oG6KDB73ZcDBICUoxIaho7WgxJBpAhFK2c3g7KgQ3RQEKVS3nBoAXSCjLJajT0EgFej30cf1IcSACNLkCuNn4fYoP8LX07Ag7HD9AzCS9uzAIBzFAAOoBIAAdDRaJsHT2KVcOT0boSxANSUMMSLPqc/7/a558sJsRifQwHXVSQRRC1ekYn/4gEoyCA4OQIGUA2QqRlriyvA5+DxpnIEDcggpyGFqrwrNIBD3g0akEPugQUId5qPGsAAAChxSCKATIA2APSD4BvZCBgh1WbUqbA8KUmp1FKZSKNQqOMMQv0Xx+nUOfPjwwas1UTp1xVFI6mmuMgLhId84f2hA5F9wb1UfJ4W/aU2aG3VI70BdXSYQu1GYz4r2DbBdLl99GmQ0BjVetJJTZkq5ZAb0yabL1ARADLIq2T4MQqZTCEy3Ntwci8E91GRGwh5WelwxvrN6y0+1VZ1pKNbW5shuDFtrd5NY5tv3H+fVIfvpun3tpUx+yIV9gMdTQ6TKW6EYQf3oeecRkOiJIXWUEmRaFC0hHVGSUpdozVEo2JRWAqlmrJlUVGjF01haU1qqh0NajRiv0ZZP+zWW5wd1lVLa9ZEtdlRMZvROs4KvimSbioQUywaidykZNZsmWa6ON94pQO1txtPmHOQlZGOfoZo5ECIP3JOnlNz2vZ2w+ZvrNGtlRfHjxdPmaKtenFtlz1twZO16ls708S7XbDdW13guIBbwN66iHRBs/xBeGSX5K4HnKt43cNK7X823hv+uThlyns1/gHYypMnV2L9F8u3+l8i/v23XJo2aNs/Swq9saW+KFxlhz0rHfyMiY9ZBrU7+o4zYAMtXN8O4p++fuFW9xokG1DtLTNycTOoUf17fjrTJDxI1/6TUfRTUQ5At772h2abZUYKmjrPOh2uTujy0UfjuzydBngvbGqye0LgxNbHfeqh5zPVsUF+KOdkzqHfnetJNCA98POo/tOafy6D/vf4HXXLX/TPvbRu9Vs3frkUs8fqHXXKxqmXf1E7nqXs8lpZC9VykZAVfP4kX9XQsiI8dYGKfU1uJxvmuVcEGlQNc90N0YisRVXf7F6ZT9V7kuSJun5ATlIQnLr+tXdUpQqix5tvav4smn9Q1a2XtrsoakaNK/bdCpZskbTDB+xwF9282Yn4wO7aR5rijzYU867doMepO33aUy4MxNc9fLjOF+PQ4+sy90Ch/PPmRfuzDdn/7sHm7dgxj8UYW/F5OHNCNj4MhoxLl13+7avEwpvDbef0h/m67qNfjWTRRJo8gDXNtD2dFkgTSk7VDC4qg1kAAGJSXsR2R/ZYXv2uV+A7dg8g1lqUVBKtM3fiOX4Bv4B/sjcj8Fpp4eRZCb1/U1J/l5HOn9UPyRMTCFhOBh9wOSzN/yXwl+wiZkLRK8ukOY+3tEPpzQ9ZBANA6gDAb8CV7P1tKrRLy+DnptBmgFHIBpxSIZLAVoIMpRHklPoBqcKwoykpeDhUVABQbrkBJNERwMS7ArhEj5AE9j2Q0fkO5BIDB5IxUk5JKQ6OHMQzZoGx0Za5NGf1eljXKJBx8UTG3uwy83lhRDUyvJ8L0nXVteXkMMbD8NvYwx+w1wsCS7O8100PNVdjXC4v7eO9DsYqVDcJgq9nTQ3b9ETVVq8bSIPwGGYChg3NYi4ax8rLgw2GC8jKz0/EsGvmYsZ31J2yGjF4ftz8tDrVapdADpN5lqp7LJV+AXb1BIqwaKxT6OVGG0oWhktjXjRf8zoHhpWgWtMaEZ+eaqgfu6ysev8K9yM9AwBJHkIZGMIRgWRIjhRIiVSgmJrNnjmch/D7OA82wIxnGsW8atjfxJFsGLbbzA7OWqGY2+w2ey0cAA==') format('woff2'),
        url('iconfont.woff?t=1556868044350') format('woff'),
        url('iconfont.ttf?t=1556868044350') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
        url('iconfont.svg?t=1556868044350#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`