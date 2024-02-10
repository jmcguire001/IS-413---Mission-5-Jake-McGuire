// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Calculate Total Projected Price by multiplying Jake Rate by hours, and only when button is clicked using jQuery
$(document).ready(function () {
    // Add event handler and listener
    $('#getquote').click(function (e) {
        // This keeps the form from submitting and refreshing
        e.preventDefault();

        // Get values using JQuery
        var jakeRate = parseFloat($('#rate').val().replace('$', '')) || 0;
        var hours = parseFloat($('#hours').val()) || 0;
        // Calculate the total cost
        var total = jakeRate * hours;

        // Return the total cost to the output box
        $('#total').val("$" + total.toFixed(2).toString());
    });

    // Add an input event listener to prevent typing invalid numbers
    $('#hours, #rate').on('input', function () {
        // Set the user input to a variable
        var inputValue = $(this).val();

        // Prevent leading zeros
        if (/^0[0-9]+$/.test(inputValue)) {
            $(this).val('');

            return;
        }

        // Prevent multiple decimals
        if ((inputValue.match(/\./g) || []).length > 1) {
            $(this).val('');

            return;
        }

        // Prevent negative or non-numeric values
        if (isNaN(parseFloat(inputValue)) || parseFloat(inputValue) < 0) {
            $(this).val('');

            return;
        }
    });
});

