import React from 'react'
import Svg, {G, Path, Rect, Defs} from 'react-native-svg'


interface Props {
  color?: string,
  width?: number,
  height?: number,
  opacity?: number
}


const TableRender = ({color = '#34B487', width = 56, height = 56, opacity = 0.5} : Props) => {
  return (
    <Svg width="259" height="203" viewBox="0 0 259 203" fill="none">
        <G filter="url(#filter0_d_416_418)">
            <Rect width="256" height="200" rx="16" fill="#161D28"/>
            <G filter="url(#filter1_d_416_418)">
                <Rect x="56" y="16" width="32" height="16" rx="6" fill="white" fillOpacity={opacity} />
            </G>
            <G filter="url(#filter2_d_416_418)">
                <Rect x="12" y="49" width="32" height="8" rx="4" fill="white" fillOpacity={opacity} />
            </G>
            <G filter="url(#filter3_d_416_418)">
                <Rect x="12" y="67" width="32" height="8" rx="4" fill="white" fillOpacity={opacity} />
            </G>
            <G filter="url(#filter4_d_416_418)">
                <Rect x="12" y="85" width="32" height="8" rx="4" fill="white" fillOpacity={opacity} />            
            </G>
            <G filter="url(#filter5_d_416_418)">
                <Rect x="12" y="103" width="32" height="8" rx="4" fill="white" fillOpacity={opacity} />
            </G>
            <G filter="url(#filter6_d_416_418)">
                <Rect x="12" y="121" width="32" height="8" rx="4" fill="white" fillOpacity={opacity} />
            </G>
            <G filter="url(#filter7_d_416_418)">
                <Rect x="12" y="139" width="32" height="8" rx="4" fill="white" fillOpacity={opacity} />
            </G>
            <G filter="url(#filter8_d_416_418)">
                <Rect x="12" y="157" width="32" height="8" rx="4" fill="white" fillOpacity={opacity} />
            </G>
            <G filter="url(#filter9_d_416_418)">
                <Rect x="12" y="175" width="32" height="8" rx="4" fill="white" fillOpacity={opacity} />
            </G>
            <G filter="url(#filter10_d_416_418)">
                <Rect x="106" y="16" width="32" height="16" rx="6" fill="white" fillOpacity={opacity} />
            </G>
            <G filter="url(#filter11_d_416_418)">
                <Rect x="156" y="16" width="32" height="16" rx="6" fill="white" fillOpacity={opacity} />
            </G>
            <G filter="url(#filter12_d_416_418)">
                <Rect x="206" y="16" width="32" height="16" rx="6" fill="white" fillOpacity={opacity} />
            </G>
            <G filter="url(#filter13_d_416_418)">
                <Rect x="56" y="44" width="32" height="144" rx="8" fill="#34B487"/>
            </G>
            <G filter="url(#filter14_d_416_418)">
                <Rect x="106" y="44" width="32" height="144" rx="8" fill="#25A1FE"/>
            </G>
            <G filter="url(#filter15_d_416_418)">
                <Rect x="156" y="44" width="32" height="144" rx="8" fill="#B15DFF"/>
            </G>
            <G filter="url(#filter16_d_416_418)">
                <Rect x="206" y="44" width="32" height="144" rx="8" fill="#FF6859" />
            </G>
        </G>
        {/* <Defs>
        <filter id="filter0_d_416_418" x="0" y="0" width="259" height="203" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="2" dy="2"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_416_418"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_416_418" result="shape"/>
        </filter>
        <filter id="filter1_d_416_418" x="56" y="16" width="35" height="21" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="2" dy="4"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_416_418"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_416_418" result="shape"/>
        </filter>
        <filter id="filter2_d_416_418" x="12" y="49" width="35" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="2" dy="4"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_416_418"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_416_418" result="shape"/>
        </filter>
        <filter id="filter3_d_416_418" x="12" y="67" width="35" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="2" dy="4"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_416_418"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_416_418" result="shape"/>
        </filter>
        <filter id="filter4_d_416_418" x="12" y="85" width="35" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="2" dy="4"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_416_418"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_416_418" result="shape"/>
        </filter>
        <filter id="filter5_d_416_418" x="12" y="103" width="35" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="2" dy="4"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_416_418"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_416_418" result="shape"/>
        </filter>
        <filter id="filter6_d_416_418" x="12" y="121" width="35" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="2" dy="4"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_416_418"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_416_418" result="shape"/>
        </filter>
        <filter id="filter7_d_416_418" x="12" y="139" width="35" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="2" dy="4"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_416_418"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_416_418" result="shape"/>
        </filter>
        <filter id="filter8_d_416_418" x="12" y="157" width="35" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="2" dy="4"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_416_418"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_416_418" result="shape"/>
        </filter>
        <filter id="filter9_d_416_418" x="12" y="175" width="35" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="2" dy="4"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_416_418"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_416_418" result="shape"/>
        </filter>
        <filter id="filter10_d_416_418" x="106" y="16" width="35" height="21" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="2" dy="4"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_416_418"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_416_418" result="shape"/>
        </filter>
        <filter id="filter11_d_416_418" x="156" y="16" width="35" height="21" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="2" dy="4"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_416_418"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_416_418" result="shape"/>
        </filter>
        <filter id="filter12_d_416_418" x="206" y="16" width="35" height="21" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="2" dy="4"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_416_418"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_416_418" result="shape"/>
        </filter>
        <filter id="filter13_d_416_418" x="56" y="44" width="37" height="149" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="4" dy="4"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_416_418"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_416_418" result="shape"/>
        </filter>
        <filter id="filter14_d_416_418" x="106" y="44" width="37" height="149" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="4" dy="4"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_416_418"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_416_418" result="shape"/>
        </filter>
        <filter id="filter15_d_416_418" x="156" y="44" width="37" height="149" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="4" dy="4"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_416_418"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_416_418" result="shape"/>
        </filter>
        <filter id="filter16_d_416_418" x="206" y="44" width="37" height="149" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="4" dy="4"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_416_418"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_416_418" result="shape"/>
        </filter>
        </Defs> */}
    </Svg>
  )
}

export default TableRender