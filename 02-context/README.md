# Shopping Cart — React Context API

A shopping cart application built with **React Context API**, useState, and localStorage.

This project is **Version Two** of a state-management learning series where the same shopping cart application is deliberately implemented using different state-management approaches:

1. useState
2. Context API
3. Context + useReducer
4. Zustand

The purpose of this version is to understand how **React Context can solve prop drilling** and provide shared state to multiple components.

## Project Overview

In Version One, the cart state was stored in the App component and passed down through props.

As the application grows, passing state and functions through multiple components can become difficult.

In this version, the cart state is moved into a **Context Provider**.

Components can access the cart directly using a custom useCart() hook.
