/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-10-15 15:25:28
 * @LastEditors: Adxiong
 * @LastEditTime: 2023-03-02 01:01:45
 */
import { Outlet } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './base.css';

interface Point {
  x: number;
  y: number;
}
interface Node {
  start: Point;
  length: number;
  theta: number;
}

const DefaultLayout = () => {
  const CanvasRef = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D>();
  const pendingTasks = useRef<any[]>([]);
  const [frameCount, setFrameCount] = useState<number>(0);

  const requestAnimation = useRef<number>(0);

  const [size, setSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const Navigate = useNavigate();
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    InitCtx();
    getSize();
    ListenerSizeChange();
    Step({
      start: { x: 0, y: 0 },
      length: 15,
      theta: Math.PI / 4,
    });
    // StartFrame();

    return () => {
      window.removeEventListener('resize', () => {
        getSize();
      });
    };
  }, []);

  const InitCtx = () => {
    if (CanvasRef.current) {
      let ctx = CanvasRef.current.getContext('2d')!;
      ctx!.strokeStyle = '#000';
      setCtx(ctx);
    }
  };

  const Step = (b: Node, depth: number = 0) => {
    let endPoint = GetEndPoint(b);
    DrawBranch(b);

    if (depth <= 4 || Math.random() < 0.5) {
      pendingTasks.current.push(() =>
        Step(
          {
            start: endPoint,
            length: b.length + (Math.random() * 2 - 1),
            theta: b.theta + 0.2 * Math.random(),
          },
          depth + 1
        )
      );
    }
    if (depth <= 4 || Math.random() < 0.5) {
      pendingTasks.current.push(() =>
        Step(
          {
            start: endPoint,
            length: b.length + (Math.random() * 2 - 1),
            theta: b.theta - 0.2 * Math.random(),
          },
          depth + 1
        )
      );
    }

    // setPendingTasks((pendingTasks) => {
    //   let clonePendingTasks = [...pendingTasks];
    //   if (depth <= 4 || Math.random() < 0.5) {
    //     clonePendingTasks.push(() =>
    //       Step(
    //         {
    //           start: endPoint,
    //           length: b.length + (Math.random() * 2 - 1),
    //           theta: b.theta - 0.2 * Math.random(),
    //         },
    //         depth + 1
    //       )
    //     );
    //   }

    //   return clonePendingTasks;
    // });
  };

  const frame = () => {
    let tasks: any[] = [];
    pendingTasks.current = pendingTasks.current.filter((i) => {
      if (Math.random() > 0.4) {
        tasks.push(i);
        return true;
      }
      return false;
    });
    tasks.forEach((fn) => fn());
  };

  const StartFrame = () => {
    requestAnimationFrame(() => {
      setFrameCount((frameCount) => {
        let fc = frameCount + 1;
        if (fc % 3 == 0) {
          fc = 0;
          frame();
        }
        StartFrame();
        return fc;
      });
    });
  };

  const DrawBranch = (b: Node) => {
    LintTo(b.start, GetEndPoint(b));
  };

  const LintTo = (p1: Point, p2: Point) => {
    ctx?.beginPath();
    ctx?.moveTo(p1.x, p1.y);
    ctx?.lineTo(p2.x, p2.y);
    ctx?.stroke();
  };

  const GetEndPoint = (b: Node) => {
    return {
      x: b.start.x + b.length * Math.cos(b.theta),
      y: b.start.y + b.length * Math.sin(b.theta),
    };
  };

  const getSize = () => {
    let width = document.body.clientWidth;
    let height = document.body.clientHeight;
    setSize({ width, height });
  };

  const ListenerSizeChange = () => {
    window.addEventListener('resize', () => {
      getSize();
    });
  };

  const handleClickNav = (path: string) => {
    console.log(path);
    Navigate(path);
  };

  const switchTheme = () => {
    setTheme((theme) => {
      return theme === 'dark' ? 'light' : 'dark';
    });
  };

  return (
    <div className={theme == 'dark' ? 'dark layout' : 'light layout'}>
      {/* <canvas ref={CanvasRef} width={size.width} height={size.height}></canvas> */}
      <div className="header">
        <div className="site-logo" onClick={() => handleClickNav('/')}>
          logo
        </div>
        <div
          className="site-nav"
          onClick={(e) => {
            console.log(e.target);
          }}
        >
          <div onClick={() => handleClickNav('blog/list')}>Blog</div>
          <div onClick={() => handleClickNav('links')}>Links</div>
          <div onClick={() => handleClickNav('project')}>Project</div>
          <div onClick={() => handleClickNav('talks')}>Talks</div>
          <div>
            <a href="https://github.com/Adxiong">github</a>
          </div>
          <div onClick={switchTheme}>{theme === 'dark' ? '白天' : '黑暗'}</div>
        </div>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
