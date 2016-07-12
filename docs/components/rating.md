# rating控件

用于评级评分

# 如何使用

暂无

# 示例


##基础Rating

常用于评级评分
<div class="example-content"><style>.content{
    padding: 10px;
}
.example{
    width: 60%;
    margin: 80px;
}
.col-xs-4{
    width: 33.3%;
    float: left;
}
</style></div>
<div class="example-content"> <div class="u-rating" data-score="3" data-plugin="rating"></div>
</div>
<div class="example-content"><script>(function(document, window, $) {
    'use strict';
    
      var  defaults= {
        targetKeep: true,
        icon: "font",
        starType: "i",
        starOff: "icon fa fa-star",
        starOn: "icon fa fa-star orange-600",
        cancelOff: "icon fa fa-minus-circle",
        cancelOn: "icon  fa fa-minus-circle orange-600",
        starHalf: "icon fa fa-half-o orange-500"
      };
      $('[data-plugin="rating"]').each(function() {
          var $this = $(this);
          
          $this.raty(options);
      });
      // }
    // });
  })(document, window, jQuery);
</script></div>
<div class="examples-code"><pre><code>.content{
    padding: 10px;
}
.example{
    width: 60%;
    margin: 80px;
}
.col-xs-4{
    width: 33.3%;
    float: left;
}</code></pre>
</div>
<div class="examples-code"><pre><code> &lt;div class="u-rating" data-score="3" data-plugin="rating">&lt;/div></code></pre>
</div>
<div class="examples-code"><pre><code>(function(document, window, $) {
    'use strict';
    
      var  defaults= {
        targetKeep: true,
        icon: "font",
        starType: "i",
        starOff: "icon fa fa-star",
        starOn: "icon fa fa-star orange-600",
        cancelOff: "icon fa fa-minus-circle",
        cancelOn: "icon  fa fa-minus-circle orange-600",
        starHalf: "icon fa fa-half-o orange-500"
      };
      $('[data-plugin="rating"]').each(function() {
          var $this = $(this);
          

          $this.raty(options);
      });
      // }
    // });
  })(document, window, jQuery);</code></pre>
</div>

##所个star的Rating

通过在html上 的属性 data-number值改变数量
<div class="example-content"><style>.content{
    padding: 10px;
}
.example{
    width: 60%;
    margin: 80px;
}
.col-xs-4{
    width: 33.3%;
    float: left;
}
</style></div>
<div class="example-content"><div class="example">
      <div class="u-rating" data-number="10" data-plugin="rating"></div>
  </div>
</div>
<div class="example-content"><script>(function(document, window, $) {
    'use strict';
    
      var  defaults= {
        targetKeep: true,
        icon: "font",
        starType: "i",
        starOff: "icon fa fa-star",
        starOn: "icon fa fa-star orange-600",
        cancelOff: "icon fa fa-minus-circle",
        cancelOn: "icon  fa fa-minus-circle orange-600",
        starHalf: "icon fa fa-half-o orange-500"
      };
      $('[data-plugin="rating"]').each(function() {
          var $this = $(this);
          var options = $.extend(true, {}, defaults, $this.data());

          if (options.hints) {
            options.hints = options.hints.split(',');
          }

          $this.raty(options);
      });
      // }
    // });
  })(document, window, jQuery);
</script></div>
<div class="examples-code"><pre><code>.content{
    padding: 10px;
}
.example{
    width: 60%;
    margin: 80px;
}
.col-xs-4{
    width: 33.3%;
    float: left;
}</code></pre>
</div>
<div class="examples-code"><pre><code>&lt;div class="example">
      &lt;div class="u-rating" data-number="10" data-plugin="rating">&lt;/div>
  &lt;/div></code></pre>
</div>
<div class="examples-code"><pre><code>(function(document, window, $) {
    'use strict';
    
      var  defaults= {
        targetKeep: true,
        icon: "font",
        starType: "i",
        starOff: "icon fa fa-star",
        starOn: "icon fa fa-star orange-600",
        cancelOff: "icon fa fa-minus-circle",
        cancelOn: "icon  fa fa-minus-circle orange-600",
        starHalf: "icon fa fa-half-o orange-500"
      };
      $('[data-plugin="rating"]').each(function() {
          var $this = $(this);
          var options = $.extend(true, {}, defaults, $this.data());

          if (options.hints) {
            options.hints = options.hints.split(',');
          }

          $this.raty(options);
      });
      // }
    // });
  })(document, window, jQuery);</code></pre>
</div>

##不同尺寸Rating

u-rating-lg u-rating-sm供尺寸的选择
<div class="example-content"><style>.content{
    padding: 10px;
}
.example{
    width: 60%;
    margin: 80px;
}
.col-xs-4{
    width: 33.3%;
    float: left;
}
</style></div>
<div class="example-content"><div class="example">
    <div class="margin-bottom-10">
        <div class="u-rating u-rating-sm" data-score="4" data-plugin="rating"></div>
    </div>
    <div class="margin-bottom-10">
        <div class="u-rating" data-score="4" data-plugin="rating"></div>
    </div>
    <div>
        <div class="u-rating u-rating-lg" data-score="4" data-plugin="rating"></div>
    </div>
</div>
</div>
<div class="example-content"><script>(function(document, window, $) {
    'use strict';
    
      var  defaults= {
        targetKeep: true,
        icon: "font",
        starType: "i",
        starOff: "icon fa fa-star",
        starOn: "icon fa fa-star orange-600",
        cancelOff: "icon fa fa-minus-circle",
        cancelOn: "icon  fa fa-minus-circle orange-600",
        starHalf: "icon fa fa-half-o orange-500"
      };
      $('[data-plugin="rating"]').each(function() {
          var $this = $(this);
          var options = $.extend(true, {}, defaults, $this.data());

          if (options.hints) {
            options.hints = options.hints.split(',');
          }

          $this.raty(options);
      });
      // }
    // });
  })(document, window, jQuery);
</script></div>
<div class="examples-code"><pre><code>.content{
    padding: 10px;
}
.example{
    width: 60%;
    margin: 80px;
}
.col-xs-4{
    width: 33.3%;
    float: left;
}</code></pre>
</div>
<div class="examples-code"><pre><code>&lt;div class="example">
    &lt;div class="margin-bottom-10">
        &lt;div class="u-rating u-rating-sm" data-score="4" data-plugin="rating">&lt;/div>
    &lt;/div>
    &lt;div class="margin-bottom-10">
        &lt;div class="u-rating" data-score="4" data-plugin="rating">&lt;/div>
    &lt;/div>
    &lt;div>
        &lt;div class="u-rating u-rating-lg" data-score="4" data-plugin="rating">&lt;/div>
    &lt;/div>
&lt;/div></code></pre>
</div>
<div class="examples-code"><pre><code>(function(document, window, $) {
    'use strict';
    
      var  defaults= {
        targetKeep: true,
        icon: "font",
        starType: "i",
        starOff: "icon fa fa-star",
        starOn: "icon fa fa-star orange-600",
        cancelOff: "icon fa fa-minus-circle",
        cancelOn: "icon  fa fa-minus-circle orange-600",
        starHalf: "icon fa fa-half-o orange-500"
      };
      $('[data-plugin="rating"]').each(function() {
          var $this = $(this);
          var options = $.extend(true, {}, defaults, $this.data());

          if (options.hints) {
            options.hints = options.hints.split(',');
          }

          $this.raty(options);
      });
      // }
    // });
  })(document, window, jQuery);</code></pre>
</div>


<!--### 示例1

示例1说明

### 示例2

示例2说-->

# API

## 属性

暂无
<!--### 属性1

属性1说明

### 属性2

属性2说明-->

## 方法

暂无
<!--### 方法1

方法1说明

### 方法2

方法2说明-->
