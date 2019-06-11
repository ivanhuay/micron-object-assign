# Micron Benchmark Object Assign vs Hiroki Assign
This is a benchmark for analize posible performance issues with a [Hiroki](https://github.com/ivanhuay/hiroki) internal method.

## Motivation
In this benchmark we measure the time of this custom assign function:

```javascript
function assign(obj, set) {
    Object.keys(set).forEach((key) => {
        if(set[key].hasOwnProperty('$pull')) {
            obj[key] = obj[key].filter((subitem) => set[key].$pull.indexOf(subitem) === -1);
        } else if(set[key].hasOwnProperty('$push')) {
            obj[key] = obj[key].concat(set[key].$push);
        } else{
            obj[key] = set[key];
        }
    });
}
```

this function will be used to add the `$pull` and `$push` methods from update to a simple save method.

Also save and update has difference performace, you can check this difference [here](https://github.com/ivanhuay/micron-mongoose-update-vs-save).

## Results

Using that function with the `$push` is the worst performance with 3x times than just doing a `Object.Assign` but the times are equal to small for consider that a problem. We have to make 90000 perations to see a diference of 20ms.

[view results HERE](https://ivanhuay.github.io/micron-object-assign/)
![Alt image](https://github.com/ivanhuay/micron-object-assign/blob/master/img/results.png?raw=true)

## Conclusion
Using this custom function will not significantly affect the performance of [Hiroki](https://github.com/ivanhuay/hiroki).


## run the test

```
git clone https://github.com/ivanhuay/micron-object-assign.git

cd micron-object-assign

npm i

npm run test
```

after running that the results should be on the docs folder.
