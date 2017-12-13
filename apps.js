// creating a variable to store the state data
var state = {
	items: ['apples', 'oranges', 'milk']
}

// add an item to the state variable, without jQuery
var addItem = function(state,item) {
	state.items.push(item)
	console.log(state)
	return state
}

// delete an item from the state variable, without jQuery
var removeItem = function(state,item) {
	return state.items.filter(function(i) {
		return i !== item
	})
}


// rendering function for the state into the DOM
var renderList = function(state,element) {
	var itemsHTML = state.items.map(function(item) {
		return '<li> <span class="shopping-item">' + item + '</span>' +
        '<div class="shopping-item-controls">' +
          '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span>' +
          '</button>' +
          '<button class="shopping-item-delete">' +
            '<span class="button-label">delete</span>' +
          '</button>' +
        '</div>' +
      '</li>'
	});
	$(element).html(itemsHTML); // element is the contents of what element to replace
}

// put all the default page elements in the application state
$(function() {
	renderList(state,'ul.shopping-list')
	// var shoppingItems = $('span').filter('.shopping-item').text()
	// console.log(shoppingItems)
	// for (i = 0; i<= shoppingItems.length; i++) {
	// 	addItem(state,shoppingItems[i])
	// }
	// console.log(state.items)

// event listener for clicking the form 'add item'
	$('#js-shopping-list-form').submit(function(event) {
		event.preventDefault()
		addItem(state,$('#shopping-list-entry').val())
		renderList(state,'ul.shopping-list')
		$('#shopping-list-entry').val('')
	})


// event listener for checking a button
	$(document).on('click','.shopping-item-toggle',function() {
//		$('button.shopping-item-toggle').parents('.shopping-item').toggleClass('shopping-item__checked')
//		$(this).closest('span').find('.shopping-item').toggleClass('shopping-item__checked')
		$(this).parent().siblings('span.shopping-item').toggleClass('shopping-item__checked')
	})

//event listener for deleting an item 
	$(document).on('click','.shopping-item-delete',function() {
		console.log('hello')
		var stateName = $(this).parent().siblings('.shopping-item').text()
		console.log(stateName)
		state.items = removeItem(state,stateName)
		console.log(state.items)
		renderList(state,'ul.shopping-list')
	})

})