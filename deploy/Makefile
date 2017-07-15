deploy: stop delete pull run

stop:
		docker stop webapi || echo "Stop WEBAPI"
		docker stop nginx || echo "Stop NGINX"

delete:
		docker rm webapi || echo "Delete WEBAPI"
		docker rm nginx || echo "Delete NGINX"

pull:
		docker pull registry.gitlab.com/fernandocagale/seneca-service-webapi:latest
		docker pull registry.gitlab.com/fernandocagale/seneca-service-webapi:nginx

run:
		docker run -d \
				--net=host \
				--name webapi \
				--restart always \
				-p 3000:3000 \
				registry.gitlab.com/fernandocagale/seneca-service-webapi:latest

		docker run -d \
				--net=host \
				--name nginx \
				--restart always \
				-p 80:80 \
				registry.gitlab.com/fernandocagale/seneca-service-webapi:nginx
