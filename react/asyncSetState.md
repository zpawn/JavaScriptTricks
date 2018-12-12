When using `setState()` to update state, beware that a call to `setState()` may be asynchronous.

Because React will try to batch multiple `setState()` calls into a single update, you should not rely on the value of state being updated immediately.

```javascript
setBlogPostViews = viewsAmount => {
  this.setState({ postViews: viewsAmount });
  
  // Wrong! We cannot rely on the state being updated
  this.addToTotalViews(this.state.postViews);
}
```

In this example, we might get into trouble. Because we cannot rely on the `postViews` state being updated before we pass the value to the `addToTotalViews()` function on the next line.

Here are 3 smooth ways you can get around this.

1. Pass the subsequent statements wrapped in a callback function to setState()
    
    ```javascript
    setBlogPostViews = viewsAmount => {
      this.setState({ postViews: viewsAmount }, () => this.addToTotalViews(this.state.postViews));
    }
    ```
    
    `setState()` takes a callback function as a second parameter, which is invoked as soon as the state is effectively updated.
    
    This makes the call to `addToTotalViews()` reliable.

2. Pass a function to `setState()` instead of an object literal.

    ```javascript
    setBlogPostViews = viewsAmount => {
      this.setState(() => {
        // Do stuff here
        this.addToTotalViews(viewsAmount);
        
        // And then return the state to be updated
        return { postViews: viewsAmount }
      });
    }
    ```
    
    In cases where we want to update a state based on a current state, we should use the same technique to avoid potential race conditions.
    
    ```javascript
    incrementBlogPostViews = () => {
      // Wrong! We risk an unreliable update if the above function is called from different places concurrently
      this.setState({ postViews: this.state.postViews + 1 });
      
      // Correct. We pass a function with the previous state as a parameter to setState()
      this.setState(prevState => ({ postViews: prevState.postViews + 1 }));
    }
    ```

3. Create an async wrapper function that returns a promise
    Personally, I’m a huge fan of this little trick.
    Simply wrap `setState` in a function that returns a promise which resolves when the state has been effectively updated.
    
    Here is an example of a wrapper function in two versions: ES7 using the async keyword, and ES6 by returning a new promise.
    
    ````javascript
    // Define an async wrapper function (ES7)
    setBlogPostViewsAsync = async viewsAmount => {
      this.setState({ postViews: viewsAmount }, () => Promise.resolve(viewsAmount));
    }
    
    // Define an async wrapper function (ES6)
    setBlogPostViewsAsync = viewsAmount => {
      return new Promise(resolve => {
         this.setState({ postViews: viewsAmount }, () => resolve(viewsAmount));
      });  
    }
    
    // Use the wrapper function instead of setState directly
    setBlogPostViews = viewsAmount => {
      this.setBlogPostViewsAsync(viewsAmount)
        .then(updatedState => this.addToTotalViews(updatedState));
    }
    ````
    
You can also choose to do a more generalized async wrapper function that would set any state and return a promise.


