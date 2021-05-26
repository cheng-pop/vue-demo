<template>
    <button class="cmq-button" 
    :class="classes" :disabled="disabled">
    <span v-if="loading" class="cmq-loadingIndicator"></span>
        <slot />
    </button>
</template>
<script lang="ts" >
import { computed } from 'vue'
export default {
    props:{
        theme:{
            type:String,
            default:'button'
        },
        size:{
            type:String,
            default: 'normal'
        },
        level:{
            type:String,
            default: 'normal'
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const {theme,size,level} = props
        const classes = computed(()=>{
           return{
               [`cmq-theme-${theme}`]:theme,
               [`cmq-size-${size}`]:size,
               [`cmq-level-${level}`]:level,
           } 
        })
        return {classes}
    }
}
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #6553e5;
$radius: 4px;
$red: #bf2437;
$grey: grey;
$green: #25b597;
$orange: #fff405;
.cmq-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 10px;
    margin-top: 8px;
    margin-bottom: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.cmq-theme-link{
    border-color: transparent;
    box-shadow: none;
    color: color;
    &:hover,&:focus{
      color: lighten($blue, 10%);
      text-decoration: underline;
    }
  }
  &.cmq-theme-text{
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,&:focus{
      color: darken($blue, 5%);;
    }
  }
   &.cmq-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.cmq-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.cmq-theme-button {
    &.cmq-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.cmq-level-success {
      background: $green;
      color: white;
      border-color: $green;
      &:hover,
      &:focus {
        background: darken($green, 10%);
        border-color: darken($green, 10%);
      }
    }
    &.cmq-level-message {
      background: $grey;
      color: white;
      border-color: $grey;
      &:hover,
      &:focus {
        background: darken($grey, 10%);
        border-color: darken($grey, 10%);
      }
    }
    &.cmq-level-warn {
      background: $orange;
      color: white;
      border-color: $orange;
      &:hover,
      &:focus {
        background: darken($orange, 10%);
        border-color: darken($orange, 10%);
      }
    }
    &.cmq-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.cmq-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.cmq-theme-link, &.cmq-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .cmq-loadingIndicator{
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px; 
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: cmq-spin 1s infinite linear;
  }
}
@keyframes cmq-spin {
  0%{transform: rotate(0deg)} 
  100%{transform: rotate(360deg)} 
}
</style>