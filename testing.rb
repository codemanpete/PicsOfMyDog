def least_common_multiple(x, y)
  multiples = []
  factor = 2
  limit = (x > y ? y : x)
  while factor * factor < limit
    if x % factor == 0 && y % factor == 0
      multiples.push(factor)
      x /= factor
      y /= factor
    else
      factor += 1
    end
  end
  multiples.inject(:*)
end

def another_function(x, y)
  p x
  p least_common_multiple(x, y)
  p x
end

another_function(30, 60)
