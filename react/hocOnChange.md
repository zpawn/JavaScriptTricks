```javascript
export const withOnChange = Child => {
   return class OnChange extends React.Component {
       onChangeHandler = event => this.props.onChange(event.target.value);

       render() {
           return <Child {...this.props} onChange={this.onChangeHandler} />;
       }
   }
}
```

or

```javascript
const onChangeHandler = onChange => event => onChange(event.target.value);

export const withOnChange =
   Child => ({ onChange, ...props }) =>
       <Child {...props} onChange={onChangeHandler(onChange)} />
```
