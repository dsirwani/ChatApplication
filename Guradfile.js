guard 'liverload' do
	watch(%r{dev/client/.+\.(css | js | ejs | html)})
	watch(%r{dev/server/start.log})
end