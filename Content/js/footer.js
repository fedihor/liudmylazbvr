document.write('\
<br/ >\
        <br />\
        <footer id="content">\
            <div class="row">\
                <div class="col-md-8 col-md-offset-2">\
                    <hr />\
                    <p class="text-right">&copy; <span id="yyyy"></span> - ФІА</p>\
                </div>\
            </div>\
        </footer>\
    </div>\
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>\
<script src="Content/bootstrap-3.3.6-dist/js/bootstrap.min.js"></script>\
</body>\
</html>\
\
');
var year = document.getElementById("yyyy");
year.innerHTML = new Date().getFullYear().toString();