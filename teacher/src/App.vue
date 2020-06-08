<template>
  <router-view/>
</template>

<style lang="scss">
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 14px;
}
.container {
  width: 100%;
  height: 100%;
  position: relative;
}
.e-loading {
  position: relative;
  &:after {
    content: "加载中...";
    color: #FFFFFF;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.45);
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
  .e-input {
    background-color: #FFFFFF;
    background-image: none;
    border-radius: 0.15rem;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #666666;
    display: inline-block;
    outline: none;
    padding: 0.5rem 1rem;
    width: 100%;
    &:focus {
      border-color: #ded9d5;
    }
  }
  .button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    padding: 0.6rem 1rem;
    border-radius: 0.15rem;
    border: none;
    &:hover {
      opacity: 0.9;
    }
  }
</style>
