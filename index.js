/*
- Define a function `getFirstSelector(selector)`, which accepts a selector and
  returns the first element that matches.
- Define a function `nestedTarget()` that pulls a `.target` out of `#nested`
  (`#` is used for IDs in selectors — but you knew that because you [read the docs][docs],
  right? :) ). (Note that in `index.html` `#nested` and `.target` just
  _happen_ to be `div`s. This method should work with arbitrary elements.)
- Define a function `increaseRankBy(n)` that increases the ranks in all of the
  `.ranked-list`s by `n`. (You might need to make use of [`parseInt()`][parseint]
- Define a function `deepestChild()` that pulls out the most deeply nested child
  element from `div#grand-node`. (Remember, you can iterate over elements and call
  `querySelector()` and `querySelectorAll()` on them. This is challenging to
  implement correctly, but not beyond your ability!)
  
  */
  
function getFirstSelector(selector) 
{
  return document.querySelector(selector);
}

function nestedTarget()
{
  return document.querySelector("#nested .target");
}

function increaseRankBy(n)
{
  var lis = document.querySelectorAll(".ranked-list li");
  
  for (var i=0;i<lis.length;i++)
  {
    lis[i].innerHTML = parseInt(lis[i].innerHTML)+n;
  }
  
}

function deepestChild()
{
  
 return document.querySelector('#grand-node div div div div');
  
}