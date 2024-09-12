$(document).on("keyup", ".chip.chip-checkbox, .chip.toggle, .chip.clickable", function(e){
    if(e.which==13 || e.which == 32)
       this.click();
  });
  $(document).on("click", ".chip button", function(e){
    e.stopPropagation();
  });
  $(document).on("click", ".chip.chip-checkbox", function(){
    let $this = $(this);
    let $option = $this.find("input");
    if($option.is(":radio")){
      let $others = $("input[name=" + $option.attr("name") + "]").not($option);
      $others.prop("checked", false);
      $others.change();
    }
    $option.prop("checked", !$this.hasClass("active"));
    $option.change();
  });
  $(document).on("click", ".chip.toggle", function(){
    $(this).toggleClass("active");
  });
  $(document).on("change", ".chip.chip-checkbox input", function(){
    let $chip = $(this).parent(".chip");
    $chip.toggleClass("active",this.checked);
    $chip.attr("aria-checked", this.checked ? "true" : "false");
  });
  
  $("#addFilterBtn").click(function(){
        let $txt = $("#addFilterTxt");
        let filter = $txt.val();
        $txt.val('');
        $(`
            <div class = "chip" tabindex = "-1">
              <span>
                ${ filter }
              </span>
              <button title="Remove chip" aria-label="Remove chip" type = "button" onclick = "$(this).parent().remove()">
                <i class = "material-icons">cancel</i>
              </button>
            </div>`).appendTo("#filterChipsContainer");;
  });